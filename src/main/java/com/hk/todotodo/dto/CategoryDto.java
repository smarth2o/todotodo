package com.hk.todotodo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
// @Setter
@Builder
@AllArgsConstructor
// @ToString
public class CategoryDto {
    private Long unq_id;
    private Long user_id;
    private String name;
}
