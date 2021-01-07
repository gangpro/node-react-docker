#! /usr/bin/env node

const http = require("http");

// 포트 환경 변수
const PORT = process.env.PORT || 5000;

// 노드 서버 생성
const SERVER = http.createServer();

// 선택한 서버에서 포트 시작
SERVER.listen(PORT);

SERVER.on("listening", () => {
    console.log("[Server]::LISTEN:%s", PORT);
});

// 서버 연결 및 에러 체크 콜백 함수
SERVER.on("error", error => {
    throw new Error(`[Server]::ERROR:${error.message}`);
});
