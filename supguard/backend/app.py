from flask import Flask
from config import Config
from routes import bp as routes_bp
from models import db, jwt

app = Flask(__name__)
app.config.from_object(Config)

# Inicializa banco de dados e JWT
db.init_app(app)
jwt.init_app(app)

# Registra as rotas
app.register_blueprint(routes_bp)

# Roda a aplicação
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Cria as tabelas no banco de dados
    app.run(debug=True)
