package com.hk.todotodo.repository;

import com.hk.todotodo.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class UserRepository {
    private final SqlSessionTemplate sql;
    public UserDto getUserById(String id) {
        return sql.selectOne("UserMapper.getUserById", id);
    }

    public void createUser(UserDto newUser) {
        sql.insert("UserMapper.createUser", newUser);
    }
}
