# Professional Cloud DevOps Engineer

## Material de apoio para o estudo da certificação DevOps do GCP

### MindMap para a Prova
https://mm.tt/app/map/3259533077?t=mMHqVEIPSV

### Idéia da aplicação
https://drive.google.com/file/d/1Fb5u4zNI5Ts04iMzpX759BPXD51rlO0N/view?usp=sharing


## Inicialização e Configurações

### Instalação do SDK do Google Cloud
 https://cloud.google.com/sdk/docs/install

### Inicialização do SDK
gcloud init

### Configuração do projeto
gcloud config list
gcloud config set project <PROJECT_ID>
gcloud config set compute/region us-central1

## Criando a primeira Function

### Criando o repo
gcloud source repos create schola
gcloud source repos clone schola

### Deploy da Function
chmod +x deploy.sh
./deploy.sh

```
#!/bin/bash

export PROJECT_ID=$(gcloud config list --format 'value(core.project)')
export REPOSITORY_ID=schola

export URL=https://source.developers.google.com/projects/$PROJECT_ID/repos/$REPOSITORY_ID

gcloud functions deploy helloGET \
--source $URL \
--trigger-http \
--runtime=nodejs18;
```

### Testando a Function
gcloud functions call helloGET

### Excluindo a function
gcloud functions list
gcloud functions delete helloGET --region us-central1


## Criando Build automatizado

## Criacao do trigger
gcloud builds triggers create cloud-source-repositories \
    --name=trigger-schola \
    --repo=schola \
    --region=us-central1 \
    --build-config=cloudbuild.yaml \
    --branch-pattern=master

### Excluindo o trigger
gcloud builds triggers list --region=us-central1
gcloud builds triggers delete trigger-schola --region=us-central1