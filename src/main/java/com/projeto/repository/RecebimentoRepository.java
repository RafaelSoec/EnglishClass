package com.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projeto.model.entities.Recebimento;

@Repository
public interface RecebimentoRepository extends JpaRepository<Recebimento, Long> {

    @Query("SELECT SUM(v.valor) FROM Recebimento v WHERE v.idUsuario = ?1")
    Double recuperarRecebimentosPorAluno(Long idUsuario);

}
