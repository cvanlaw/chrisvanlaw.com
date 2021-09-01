FROM jekyll/builder:4.2.0 as builder

RUN mkdir /app
RUN chown -R jekyll:jekyll /app
WORKDIR /app
COPY . .
RUN jekyll build

FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx /etc/nginx/

RUN mkdir -p /var/www/chrisvanlaw.com/
COPY --from=builder /app/_site /var/www/chrisvanlaw.com/