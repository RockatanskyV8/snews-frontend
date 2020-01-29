import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/snews',
});

const apiConfig = {

  'createContatos' : async ( name, email, phone, gender, birthday ) => {
    await api.post('/contatos/create', {
        "info": {
              "name"     : name,
              "email"    : email,
              "phone"    : phone,
              "gender"   : gender,
              "birthday" : birthday
          }
      });
  },

  'specificContato' : async (id) => {
    const { data } = await api.get('/contatos/specific/' + id)
    return data
  },

  'getContatos' : async () => {
      const { data } = await api.get('/contatos/get');
      return data
    },

  'deleteContatos' : async (id) => {
      await api.delete('/contatos/delete/' + id);
    },

    'updateContato' : async ( id, name, email, phone, gender, birthday ) => {
      await api.put('/contatos/update', {
        "id" : id,
        "info": {
              "name"     : name,
              "email"    : email,
              "phone"    : phone,
              "gender"   : gender,
              "birthday" : birthday
          }
        });
    }

}

export default apiConfig;
