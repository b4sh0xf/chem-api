# 🧪 chem-api!

- a simple api to grab interesting informations about all the elements in the periodic table

## 🚀 how 2 use?

- search for elements in the endpoint: /element/$(name)
- you get this kind of information:
    - name in latin
    - eletronic configuartion (in noble gas core)
    - group
    - period
    - type of the element
    - description
    - curiosity
    - atomic number
    - molar mass
    - interesting reactions involving the element
- 🌐 server answer in json!

## 🛠️ technologies

- ORM mongoose, to registrate the elements
- express

## 🎮 PoC:

```bash
curl "http://localhost:3000/whoami"
````
![image](https://github.com/user-attachments/assets/792b83fe-e629-4968-aa69-1d17e7d9ea80)

```bash
curl "http://localhost:3000/element/sodium"
````
![image](https://github.com/user-attachments/assets/536cfbc3-87b3-487e-a287-ce008f4f0cf4)


