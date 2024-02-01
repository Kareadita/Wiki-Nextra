---
title: 'SWAG EXAMPLE'
---

### SWAG (Secure Web Application Gateway) Reverse Proxy Config

Place the following configuration as `kavita.subdomain.conf` in the `/nginx/proxy-confs` directory, only subdomain is supported.

Make sure that your Kavita docker is using the same Docker network as [SWAG](https://docs.linuxserver.io/general/swag) (this could also be a custom created network for the proxy, such as proxynet). In case you are using a different subdomain for Kavita, have set a different Dockername for Kavita, or are using a different port, make sure to adjust this accordingy in the config file.

```
## Version 2022/08/22
# make sure that your dns has a cname set for kavita
# if kavita is running in bridge mode and the container is named "kavita", the below config should work as is
# if not, replace the line "set $upstream_app kavita;" with "set $upstream_app <containername>;"
# or "set $upstream_app <HOSTIP>;" for host mode, HOSTIP being the IP address of kavita

server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name kavita.*;

    include /config/nginx/ssl.conf;

    client_max_body_size 0;

    # enable for ldap auth, fill in ldap details in ldap.conf
    #include /config/nginx/ldap.conf;

    # enable for Authelia
    #include /config/nginx/authelia-server.conf;

    location / {
        # enable the next two lines for http auth
        #auth_basic "Restricted";
        #auth_basic_user_file /config/nginx/.htpasswd;

        # enable the next two lines for ldap auth
        #auth_request /auth;
        #error_page 401 =200 /ldaplogin;

        # enable for Authelia
        #include /config/nginx/authelia-location.conf;

        include /config/nginx/proxy.conf;
        include /config/nginx/resolver.conf;

        set $upstream_app kavita;
        set $upstream_port 5000;
        set $upstream_proto http;

        proxy_pass $upstream_proto://$upstream_app:$upstream_port;
        proxy_set_header X-Scheme $scheme;
    }

    # Needed for OPDS access while using Authelia/ldap
    location ~ /api {
        include /config/nginx/proxy.conf;
        include /config/nginx/resolver.conf;

        set $upstream_app kavita;
        set $upstream_port 5000;
        set $upstream_proto http;
        
        proxy_pass $upstream_proto://$upstream_app:$upstream_port;
    }
}
```

**The above configuration assumes you use `kavita` as the subdomain, have the docker named `kavita` running on `port 5000` (default).**

## Adding in Organizr iframe support

Add the following two lines under `location /` and set the FQDN of your Organizr correctly.

* `proxy_hide_header "Content-Security-Policy";`
* `add_header Content-Security-Policy "frame-ancestors https://organizr.yourdomain.tld";`