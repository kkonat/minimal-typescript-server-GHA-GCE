# A ,inimal Typescript Express Server with github actions (GHA) CI/CD and Google App Engine (GAE) deployment

### Initialize git

```sh
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/kkonat/minimal-typescript-server-GHA-GCE.git
git push -u origin main
```

url: https://backend-dot-kk-tsserver.lm.r.appspot.com

### Create project:

`gcloud projects create kk-goserver`

kk-tsserver must be globally (for the whole gcloud) unique name

### Initialize config, login et stuff

`gcloud init`

### Make sure the Compute Engine API is enabled for your project

Go to the https://console.developers.google.com/apis page.

### You have to enable cloud build API as well.

Go to https://console.developers.google.com/apis/library/cloudbuild.googleapis.com and enable it.

### Enable App Engine Admin API

https://console.cloud.google.com/apis/library/appengine.googleapis.com?project=kk-tsserver

#### Then go to Service Accounts

https://console.cloud.google.com/iam-admin/serviceaccounts

#### Create a service account if does not exist

https://console.cloud.google.com/iam-admin/serviceaccounts/create

#### Go to the just-creted service account

#### Switch to Keys

#### Click "ADD KEY" > "Create new key" > "JSON"

#### Save the json file somewhere outside git-watched directory.

#### Go to github > repository > Settings > Secrets and variables > New repository secret

use GCP_CREDENTIALS for name and paste the contents of the json file into "Secret" field.
GCP_CREDENTIALS is used in .github/workflows/main.yml
