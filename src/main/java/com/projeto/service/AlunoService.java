package com.projeto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.exception.ResponseException;
import com.projeto.model.entities.Aluno;
import com.projeto.repository.AlunoRepository;

@Service
public class AlunoService extends AbstractService<Aluno>{
	
	@Autowired
	private AlunoRepository repository;

	

	public Aluno salvar(Aluno associado){
		if(associado == null) {
			throw new ResponseException("Falha ao tentar salvar: Aluno nula.");
		}
		
		if(associado.getCpf() == null) {
			throw new ResponseException("CPF inválido.");
		}
		
		boolean cpfExiste = this.validarCpfDuplicado(associado.getCpf());
		if(cpfExiste) {
			throw new ResponseException("CPF já cadastrado.");
		}
		
		return super.salvar(associado);
	}
	
	//retorna true se o cpf do associado for duplicado
	public boolean validarCpfDuplicado(String cpf) {
		Aluno associado = this.repository.recuperarAlunoPorCpf(cpf);
		
		if(associado != null) {
			return true;
		}
		
		return false;
	}
	

	public Aluno recuperarAlunoPorCpf(String cpf) {
		return this.repository.recuperarAlunoPorCpf(cpf);
	}
}


