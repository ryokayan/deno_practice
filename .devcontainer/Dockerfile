FROM ubuntu:20.04

WORKDIR /app

# Prefer not to run as root.
#USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .

# Visual Studio CodeのRemote Development 拡張機能を利用すると、
# Visual Studio CodeのGitの機能はコンテナ側で動作
RUN apt-get update && apt-get install -y \
    curl \
    zip \
    unzip \
    git \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

# Compile the main app so that it doesn't need to be compiled each startup/entry.
# RUN deno cache main.ts

# CMD ["run", "--allow-net", "main.ts"]

ENTRYPOINT ["/bin/sh", "-c", "while :; do sleep 10; done"]