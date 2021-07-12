# TODO: Improve caching
# Because this is multi-stage the output image might not be giving us the
# best caching layer for subsequent builds.
ARG REGION
ARG ENVIRONMENT=dev
#BUILDKIT_INLINE_CACHE image created

###
# Stage: BUILD
#
LABEL maintainer="Kannan Ganesan <itskannan1989@gmail.com>"

WORKDIR /app

# FIXME: Think about how to coordinate this across the monorepo - WTF is this?
COPY . .

###
# Stage: TEST
#

COPY --from=build /app .

# This calls yarn build because of yarn postinstall
RUN yarn install --frozen-lockfile --non-interactive
RUN yarn lint

# allows us to call commands as `docker run test` rather than `docker run yarn test`
ENTRYPOINT [ "yarn" ]
