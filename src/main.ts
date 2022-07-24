// 핵심 기능 NestFactory을 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 항목 파일
// 루트 모듈을 생성하고 메서드 NestFactory를 호출
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false }); // 오류로 인한 앱 종료 시 에러 노출
  await app.listen(3000);
}
bootstrap(); // 애플리케이션을 부트스트랩
