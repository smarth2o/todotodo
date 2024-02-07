package com.hk.todotodo.repository;

import com.hk.todotodo.dto.TaskDto;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class TaskRepository {
    private final SqlSessionTemplate sql;

    public void createTask(TaskDto taskDto) {
        sql.insert("TaskMapper.insertTask", taskDto);
    }

    public TaskDto getTask(int unqId) {
        return sql.selectOne("TaskMapper.selectTask", unqId);
    }

    public void updateTask(TaskDto updatedTask) {
        sql.update("TaskMapper.updateTask", updatedTask);
    }

    public void deleteTask(int unqId) {
        sql.delete("TaskMapper.deleteTask", unqId);
    }

    public List<TaskDto> getTodayTask(int user_id) {
        return sql.selectList("TaskMapper.selectTodayTasks", user_id);
    }

    public List<TaskDto> getCategoryTasks(int unqId) {
        return sql.selectList("TaskMapper.selectCategoryTasks", unqId);
    }
}
