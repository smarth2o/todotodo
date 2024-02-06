package com.hk.todotodo.controller;

import com.hk.todotodo.dto.CategoryDto;
import com.hk.todotodo.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryService categoryService;

    // 전체 카테고리 조회
    @GetMapping("/{user_id}/all")
    public ResponseEntity<List<CategoryDto>> getCategories(@PathVariable("user_id") int user_id) {
        return new ResponseEntity<>(categoryService.getCategories(user_id), HttpStatus.OK);
    }

    // 카테고리 생성
    @PostMapping("/add")
    public ResponseEntity<Void> createCategory(@RequestBody CategoryDto categoryDto) throws Exception {
        categoryService.createCategory(categoryDto.getUser_id(), categoryDto.getName());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // 카테고리 조회
    @GetMapping("/{unq_id}")
    public ResponseEntity<CategoryDto> getCategory(@PathVariable("unq_id") int unq_id) throws Exception {
        System.out.println("controller" + unq_id);
        return new ResponseEntity<>(categoryService.getCategory(unq_id), HttpStatus.OK);
    }

    // 카테고리 수정
    @PutMapping("/{unq_id}")
    public ResponseEntity<Void> updateCategory(@PathVariable("unq_id") int unq_id, @RequestBody CategoryDto categoryDto) throws Exception {
        categoryDto.setUnq_id(unq_id);
        categoryService.updateCategory(categoryDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 카테고리 삭제
    @DeleteMapping("/{unq_id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable("unq_id") int unq_id) throws Exception {
        categoryService.deleteCategory(unq_id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 특정 카테고리의 태스크 조회
//    @GetMapping("/{unq_id}/tasks")
//    public ResponseEntity<List<CategoryDto>> getCategoryTasks(@PathVariable("unq_id") int unq_id) throws Exception {
//        return new ResponseEntity<>(categoryService.getCategoryTodos(unq_id), HttpStatus.OK);
//    }

}
