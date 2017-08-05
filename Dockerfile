# lightweight base image
from alpine:3.5

# install nginx
RUN apk update && apk add nginx

ARG USER=reactor
ARG GROUP=www-data

# Creating new user group 
RUN adduser -D -u 1000 -g '${GROUP}' ${USER} \
    && mkdir /www /www/build && chown -R ${USER}:${GROUP} /var/lib/nginx && chown -R ${USER}:${GROUP} /www \
    && mkdir -p /run/nginx/

COPY nginx.conf /etc/nginx/nginx.conf
COPY public/ /www/
COPY dist/ /www/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"] 

