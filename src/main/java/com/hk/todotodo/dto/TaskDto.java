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
    private Long unq_id;
    private Long user_id;
    private Long goal_id;
    private String content;
    private LocalDateTime created_on;
    private LocalDate execute_date;
    private LocalDateTime due_by;
    private LocalDateTime finished_on;
    private boolean urgent_flag;
    private boolean is_done_flag;
}
