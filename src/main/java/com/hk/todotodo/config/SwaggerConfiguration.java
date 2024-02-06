//package com.hk.todotodo.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import springfox.documentation.builders.ApiInfoBuilder;
//import springfox.documentation.builders.PathSelectors;
//import springfox.documentation.builders.RequestHandlerSelectors;
//import springfox.documentation.service.ApiInfo;
//import springfox.documentation.spi.DocumentationType;
//import springfox.documentation.spring.web.plugins.Docket;
//import springfox.documentation.swagger2.annotations.EnableSwagger2;
//
//@Configuration
////@EnableSwagger2
//@EnableWebMvc
//public class SwaggerConfiguration {
//    @Bean
//    public Docket api() {
//        return new Docket(DocumentationType.OAS_30)
//                .useDefaultResponseMessages(true)// 기본 응답 코드
//                .select()
//                .apis(RequestHandlerSelectors.basePackage("com.hk.todotodo")) // 스캔할 패키지 범위
//                .paths(PathSelectors.any())
//                .build()
//                .apiInfo(apiInfo());
//    }
//
//    private ApiInfo apiInfo() { // swagger ui로 노출할 정보
//        return new ApiInfoBuilder()
//                .title("SpringBoot Rest API Documentation")
//                .description("목표 설정 할일 앱 todo의 swagger api입니다.")
//                .version("1.0.0")
//                .build();
//    }
//}