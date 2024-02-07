package com.hk.todotodo.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
@Getter
@Setter
@Builder
@AllArgsConstructor
@ToString
public class TaskDto {
    private int unq_id;
    private int user_id;
    private int category_id;
    private Integer goal_id;
    private String content;
    private LocalDateTime created_on;
    private LocalDate execute_date;
    private LocalDateTime due_by;
    private LocalDateTime finished_on;
    private Boolean urgent_flag;
    private Boolean is_done_flag;
}
