package com.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projeto.model.entities.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {


    @Query("SELECT v FROM Aluno v WHERE v.cpf = ?1")
    Aluno recuperarAlunoPorCpf(String cpf);
}
