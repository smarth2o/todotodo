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
    private int unq_id;
    private int user_id;
    private String name;
}
