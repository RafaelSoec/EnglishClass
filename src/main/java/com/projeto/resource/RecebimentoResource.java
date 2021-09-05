package com.projeto.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.model.entities.Recebimento;
import com.projeto.service.RecebimentoService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin(origins = "*")
@Api(value = "API REST Recebimento")
@RequestMapping(value="recebimento")
public class RecebimentoResource {
	
	@Autowired
	private RecebimentoService service;

	@GetMapping
	@ApiOperation(value ="Busca todos os recebimentos.")
	public List<Recebimento> buscarTodos() {
		return this.service.buscarTodos();
	}

	@GetMapping("/{id}")
	@ApiOperation(value ="Busca um recebimento por id.")
	public Recebimento buscarPorId(@PathVariable Long id) {
		return this.service.buscarPorId(id);
	}

	@PostMapping
	@ApiOperation(value ="Salva um recebimento.")
	public Recebimento salvar(@RequestBody Recebimento recebimento) {
		return this.service.salvar(recebimento);
		
	}

	@PutMapping("/{id}")
	@ApiOperation(value ="Atualiza um recebimento.")
	public Recebimento atualizar(@PathVariable Long id, @RequestBody Recebimento recebimento) {
		return this.service.atualizar(id, recebimento);
		
	}

	@DeleteMapping("/{id}")
	@ApiOperation(value ="Exclui um recebimento.")
	public void excluir(@PathVariable Long id) {
		 this.service.excluir(id);
	}
}
