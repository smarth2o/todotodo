package com.hk.todotodo.controller;

import com.hk.todotodo.dto.CategoryDto;
import com.hk.todotodo.dto.TaskDto;
import com.hk.todotodo.service.TaskService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tasks")
@Slf4j
public class TaskController {

    private final TaskService taskService;

    // 할일 생성 : user_id*, category_id*, content*, goal_id, execute_date, due_by
    @PostMapping("/add")
    public ResponseEntity<Void> createTask(@RequestBody TaskDto taskDto) {
        taskService.createTask(taskDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // 할일 조회
    @GetMapping("/{unq_id}")
    public ResponseEntity<TaskDto> getTask(@PathVariable("unq_id") int unq_id, Exception e) throws Exception {
        if (unq_id <= 0) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(taskService.getTask(unq_id), HttpStatus.OK);
        }
    }

    // 할일 수정 : user_id*, category_id*, content*, goal_id, execute_date, due_by
    @PutMapping("/{unq_id}")
    public ResponseEntity<Void> editTask(@PathVariable("unq_id") int unq_id, @RequestBody TaskDto taskDto) {
        taskDto.setUnq_id(unq_id);
        taskService.updateTask(taskDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 할일 삭제
    @DeleteMapping("/{unq_id}")
    public ResponseEntity<Void> deleteTask(@PathVariable("unq_id") int unq_id) throws Exception {
        taskService.deleteTask(unq_id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 오늘 할일 조회
    @GetMapping("/{user_id}/today")
    public ResponseEntity<List<TaskDto>> getTodayTask(@PathVariable("user_id") int user_id) throws Exception {
        return new ResponseEntity<>(taskService.getTodayTask(user_id), HttpStatus.OK);
    }

    // 특정 카테고리의 할일 조회
    @GetMapping("/category/{unq_id}")
    public ResponseEntity<List<TaskDto>> getCategoryTasks(@PathVariable("unq_id") int unq_id) throws Exception {
        return new ResponseEntity<>(taskService.getCategoryTasks(unq_id), HttpStatus.OK);
    }
}
