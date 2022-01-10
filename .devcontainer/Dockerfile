FROM denoland/deno:ubuntu-1.17.2

WORKDIR /app

# Prefer not to run as root.
#USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .

# Visual Studio CodeのRemote Development 拡張機能を利用すると、
# Visual Studio CodeのGitの機能はコンテナ側で動作
RUN apt-get update && apt-get -y install git

# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]
