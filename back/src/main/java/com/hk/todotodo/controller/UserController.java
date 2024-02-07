package com.hk.todotodo.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.hk.todotodo.dto.UserDto;
import com.hk.todotodo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    // 로그인
    @GetMapping("/login")
    public ResponseEntity<UserDto> login(@RequestParam("id") String id, @RequestParam("password") String password) throws Exception {
        UserDto userDto = userService.login(id, password);
        if (userDto == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(userDto, HttpStatus.OK);
        }
    }

    // 회원가입
    @PostMapping("/register")
//    @JsonProperty
    public ResponseEntity<Void> register(@RequestBody UserDto userDto) throws Exception {
        userService.register(userDto.getId(), userDto.getName(), userDto.getPassword());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
