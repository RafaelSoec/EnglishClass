package com.projeto;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.projeto.model.entities.Aluno;
import com.projeto.model.entities.Plano;
import com.projeto.service.AlunoService;
import com.projeto.service.PlanoService;

@SpringBootTest
class WebClassRoomApplicationTests {
	@Autowired
	private AlunoService alunoService;

	@Autowired
	private PlanoService pautaService;

	@Test
	void contextLoads() {
		//this.criarAluno("04729646150");
		//this.criarPlano();
		
	}
	
	Aluno criarAluno(String cpf) {
		Aluno aluno = new Aluno();
		aluno.setCpf(cpf);
		
		
	//	aluno.setDataNascimento(new Date("01/01/1992"));
		aluno.setNome("Rafael Souza");
		
		
		aluno = this.alunoService.salvar(aluno);
		
		assertNotEquals(aluno.getId(), null);
		return aluno;
	}
	
	Plano criarPlano() {
		Plano plano = new Plano();
		plano.setDescricao("Nova pauta");
		plano.setValor(20D);
		
		plano = this.pautaService.salvar(plano);
		
		assertNotEquals(plano.getId(), null);
		
		return plano;
	}


}
