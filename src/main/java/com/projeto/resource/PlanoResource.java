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

import com.projeto.model.entities.Plano;
import com.projeto.service.PlanoService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin(origins = "*")
@Api(value = "API REST Plano")
@RequestMapping(value="plano")
public class PlanoResource {
	
	@Autowired
	private PlanoService service;

	@GetMapping
	@ApiOperation(value ="Busca todos os planos.")
	public List<Plano> buscarTodos() {
		return this.service.buscarTodos();
	}

	@GetMapping("/{id}")
	@ApiOperation(value ="Busca um plano por id.")
	public Plano buscarPorId(@PathVariable Long id) {
		return this.service.buscarPorId(id);
	}

	@PostMapping
	@ApiOperation(value ="Salva um plano.")
	public Plano salvar(@RequestBody Plano plano) {
		return this.service.salvar(plano);
		
	}

	@PutMapping("/{id}")
	@ApiOperation(value ="Atualiza um plano.")
	public Plano atualizar(@PathVariable Long id, @RequestBody Plano plano) {
		return this.service.atualizar(id, plano);
		
	}

	@DeleteMapping("/{id}")
	@ApiOperation(value ="Exclui um plano.")
	public void excluir(@PathVariable Long id) {
		 this.service.excluir(id);
	}
}
