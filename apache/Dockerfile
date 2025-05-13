FROM httpd:2.4
COPY proxy.conf /usr/local/apache2/conf/extra/proxy.conf
RUN echo "Include conf/extra/proxy.conf" >> /usr/local/apache2/conf/httpd.conf
EXPOSE 80