package com.hk.todotodo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;

@Getter
// @Setter
@Builder
@AllArgsConstructor
// @ToString
public class GoalDto {
    private int unq_id;
    private int category_id;
    private LocalDate start_date;
    private LocalDate end_date;
}
