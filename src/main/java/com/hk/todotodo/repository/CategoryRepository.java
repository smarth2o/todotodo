package com.hk.todotodo.repository;

import com.hk.todotodo.dto.CategoryDto;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CategoryRepository {
    private final SqlSessionTemplate sql;

    // 유저의 모든 카테고리 조회
    public List<CategoryDto> getCategories(int user_id) {
        return sql.selectList("CategoryMapper.selectCategories", user_id);
    }
    // 새로운 카테고리 생성
    public void createCategory(CategoryDto newCategory) {
        sql.insert("CategoryMapper.insertCategory", newCategory);
    }
    public CategoryDto getCategory(int unqId) {
        return sql.selectOne("CategoryMapper.selectCategory", unqId);
    }

    public void updateCategory(CategoryDto updatedCategory) {
        sql.update("CategoryMapper.updateCategory", updatedCategory);
    }

    public void deleteCategory(int unqId) {
        sql.delete("CategoryMapper.deleteCategory", unqId);
    }

}
