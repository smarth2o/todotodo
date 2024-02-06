package com.hk.todotodo.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@ToString
public class CategoryDto {
    private int unq_id;
    private int user_id;
    private String name;

}
