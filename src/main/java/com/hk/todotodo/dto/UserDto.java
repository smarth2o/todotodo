package com.hk.todotodo.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
// @Setter
@Builder
@AllArgsConstructor
// @ToString
@Data
public class UserDto {
    private Long unq_id;
    private String id;
    private String name;
    private String email;
    private String password;
    private LocalDate register_date;
}
