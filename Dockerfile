FROM node:18.18.2-alpine

ARG WORKDIR
# ARG API_URL

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0
    # HOST=0.0.0.0 \
    # API_URL=${API_URL}

WORKDIR ${HOME}
