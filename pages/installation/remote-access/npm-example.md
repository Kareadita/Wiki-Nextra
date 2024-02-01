---
title: 'NGINX Proxy Manager Example'
media_order: 'customlocations.png,ssl.png,proxy.png'
---

 ### NGINX Proxy Manager with Let's Encrypt

* Head over to your Nginx Proxy Manager page 
* Add a new Proxy Host

![proxy](../../../public/installation/remote-access/proxy.png "The proxy host settings")

* Set the following:
  * Domain Name: to the subdomain you want to use for Kavita
  * Scheme: http
  * Forward hostname/IP: your kavita IP 
  * Forward Port: Your kavita port
  * Cache Assets: Optional
  * Websockets Support: enabled
  * Block Common Exploits: enabled
* Click Save, then edit the proxy host you just created
* Head over to SSL, and choose "Request a new SSL Certificate"

![ssl](../../../public/installation/remote-access/ssl.png "Requesting a new SSL Certificate")

* Set the following:
  * Force SSL: enabled
  * HSTS: enabled
* Click Save

## Optional: Organizr iframe Support

![customlocations](../../../public/installation/remote-access/customlocations.png "Custom Location settings for integrating with Organizr")
* Edit your Kavita proxy host
* Click on "Custom locations" and add a locations
* Click the Gear icon on the right side of the location box to open the Advanced menu
* Set the following:
  * location: /
  * Scheme: http
  * Hostname: your Kavita IP
  * Port: Your Kavita Port
  * Advanced field: 
  ```js copy
  proxy_hide_header "Content-Security-Policy";
  add_header Content-Security-Policy "frame-ancestors organizr.example.com;"; 
  ```