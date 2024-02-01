---
title: 'HAPROXY Example'
---

### HA Proxy Example

```
global
         log /dev/log    local0
         log /dev/log    local1 notice
         chroot /var/lib/haproxy
         stats socket /run/haproxy/admin.sock mode 660 level admin expose-fd listeners
         stats timeout 30s
         user haproxy
         group haproxy
         daemon

         # Default SSL material locations
         ca-base /etc/ssl/certs
         crt-base /etc/ssl/private

         ssl-default-bind-ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:RSA+AESGCM:RSA+AES:!aNULL:!MD5:!DSS
         ssl-default-bind-options no-sslv3

 defaults
         log     global
         mode    http
         option  httplog
         option  dontlognull
         timeout connect 5000
         timeout client  50000
         timeout server  50000
         errorfile 400 /etc/haproxy/errors/400.http
         errorfile 403 /etc/haproxy/errors/403.http
         errorfile 408 /etc/haproxy/errors/408.http
         errorfile 500 /etc/haproxy/errors/500.http
         errorfile 502 /etc/haproxy/errors/502.http
         errorfile 503 /etc/haproxy/errors/503.http
         errorfile 504 /etc/haproxy/errors/504.http

 frontend localhost
        bind *:443 ssl crt /tmp/all.pem
        redirect scheme https if !{ ssl_fc }
        mode http
        default_backend node

 backend node
         mode http
         option forwardfor
         server kavita 127.0.0.1:5000 
         http-request set-header X-Forwarded-Port %[dst_port]
         http-request add-header X-Forwarded-Proto https if { ssl_fc }
```         