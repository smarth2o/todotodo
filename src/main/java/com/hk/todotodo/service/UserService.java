package com.hk.todotodo.service;

import com.hk.todotodo.dto.UserDto;
import com.hk.todotodo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    // 회원가입
    public void register(String id, String name, String password) {
//        UserDto existingUser = userRepository.getUserById(id);
        UserDto existingUser = userRepository.getUserById(id);
        if (existingUser != null) {
            throw new IllegalArgumentException("이미 존재하는 아이디입니다.");
        } else {
            UserDto newUser = UserDto.builder()
                    .id(id)
                    .name(name)
                    .password(password)
                    .register_date(LocalDate.now()).build();
            userRepository.createUser(newUser);
        }
    }

    // 로그인
    public UserDto login(String id, String password) {
        UserDto loginUser = userRepository.getUserById(id);
        if (loginUser == null) {
            throw new IllegalArgumentException("아이디가 존재하지 않습니다.");
        } else if (!loginUser.getPassword().equals(password)) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }
        return loginUser;
    }

    // 회원 정보 조회
    public UserDto getUserById(String id) {
        return userRepository.getUserById(id);
    }

}
