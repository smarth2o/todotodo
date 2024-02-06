package com.hk.todotodo.service;

import com.hk.todotodo.dto.CategoryDto;
import com.hk.todotodo.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<CategoryDto> getCategories(int user_id) {
        return categoryRepository.getCategories(user_id);
    }

    public void createCategory(int user_id, String name) {
        List<CategoryDto> categoryList = categoryRepository.getCategories(user_id);
        boolean categoryExists = categoryList.stream()
                .anyMatch(categoryDto -> categoryDto.getName().equals(name));
        if (categoryExists) {
            throw new IllegalArgumentException("이미 존재하는 이름의 카테고리입니다.");
        } else {
            CategoryDto newCategory = CategoryDto.builder()
                    .user_id(user_id)
                    .name(name).build();
            categoryRepository.createCategory(newCategory);
        }
    }
    public CategoryDto getCategory(int unqId) {
        System.out.println("service"+ unqId);
        return categoryRepository.getCategory(unqId);
    }

    public void updateCategory(CategoryDto updatedCategory) {
        categoryRepository.updateCategory(updatedCategory);
    }

    public void deleteCategory(int unqId) {
        categoryRepository.deleteCategory(unqId);
    }

}
