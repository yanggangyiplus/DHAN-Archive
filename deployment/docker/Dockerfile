# Next.js 프로덕션 빌드를 위한 Dockerfile

# 의존성 설치 단계
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package.json package-lock.json* ./
RUN npm ci

# 빌드 단계
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 환경 변수 설정 (빌드 시 필요)
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# 프로덕션 단계
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Next.js 빌드 결과물 복사
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# standalone 모드에서는 server.js가 .next/standalone 폴더에 생성됨
CMD ["node", "server.js"]

