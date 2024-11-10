from flask import Blueprint, request, jsonify
from models import db, Usuario
from flask_jwt_extended import create_access_token, jwt_required

bp = Blueprint('routes', __name__)

@bp.route('/usuarios', methods=['POST'])
def criar_usuario():
    dados = request.get_json()
    if not all(k in dados for k in ('nome', 'email', 'senha')):
        return jsonify({'error': 'Nome, email e senha são obrigatórios'}), 400

    usuario_existente = Usuario.query.filter_by(email=dados['email']).first()
    if usuario_existente:
        return jsonify({'error': 'Usuário já existe'}), 409

    novo_usuario = Usuario(nome=dados['nome'], email=dados['email'])
    novo_usuario.set_password(dados['senha'])
    db.session.add(novo_usuario)
    db.session.commit()
    return jsonify({'message': 'Usuário criado com sucesso!'}), 201

@bp.route('/login', methods=['POST'])
def login():
    dados = request.get_json()
    usuario = Usuario.query.filter_by(email=dados['email']).first()
    if usuario and usuario.check_password(dados['senha']):
        token = create_access_token(identity=usuario.id)
        return jsonify({'access_token': token}), 200
    return jsonify({'error': 'Credenciais inválidas'}), 401

@bp.route('/usuarios', methods=['GET'])
@jwt_required()
def listar_usuarios():
    usuarios = Usuario.query.all()
    return jsonify([{'id': u.id, 'nome': u.nome, 'email': u.email} for u in usuarios])
