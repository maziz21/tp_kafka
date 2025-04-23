# TP5 – Chat gRPC avec Reverse Proxy WebSocket

Projet de microservice permettant la communication en temps réel via gRPC et un proxy WebSocket.

## 🎯 Objectifs

- Définir un service gRPC avec Protocol Buffers
- Créer un serveur gRPC en Node.js
- Mettre en place un reverse proxy WebSocket
- Gérer du streaming bidirectionnel de messages
- Ajouter un historique des messages (optionnel)
- Créer un client Web (bonus)

## 🛠️ Outils utilisés

- Node.js
- gRPC avec `@grpc/grpc-js` et `@grpc/proto-loader`
- WebSocket (`ws`)
- Protocol Buffers

## 📁 Structure du projet

grpc-ws-reverse-proxy/ │ ├── chat.proto # Définition du service et des messages ├── server.js # Serveur gRPC ├── proxy.js # Reverse proxy WebSocket ├── client.html # (Optionnel) Interface Web pour le chat └── README.md # Ce fichier

bash
Copier
Modifier

## 🚀 Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/maziz21/tp_kafka.git
cd tp_kafka
Installer les dépendances :

bash
Copier
Modifier
npm install
🧪 Lancer le projet
Démarrer le serveur gRPC :

bash
Copier
Modifier
node server.js
Démarrer le proxy WebSocket :

bash
Copier
Modifier
node proxy.js
🧼 Tester avec Postman
Ouvrir Postman

Créer une requête WebSocket : ws://localhost:8080

Envoyer un message JSON :

json
Copier
Modifier
{
  "chat_message": {
    "id": "msg1",
    "room_id": "room1",
    "sender_id": "client1",
    "content": "Hello World !"
  }
}
