# lightweight base image
FROM alpine:3.5

# install nginx
RUN apk update && apk add nginx

# Creating new user group
ARG USER=reactor
ARG GROUP=www-data

RUN adduser -D -u 1000 -g '${GROUP}' ${USER} \
    && mkdir /www /www/build && chown -R ${USER}:${GROUP} /var/lib/nginx && chown -R ${USER}:${GROUP} /www \
    && mkdir -p /run/nginx/

COPY nginx.conf /etc/nginx/nginx.conf

COPY public/ /www/
COPY dist/ /www/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"] 

