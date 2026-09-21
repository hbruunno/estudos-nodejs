let customers = [
    {id: 1 , name: "Bruno", site: "www.bruno.com"},
    {id: 2 , name: "Google", site: "www.google.com"},
    {id: 3 , name: "Uol", site: "www.uol.com"}
    ];

class CustomersController {

    index(req, res) {
        return res.json(customers);
    }

    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer ? 200 : 404;

        console.debug("GET :: /customers/id ", JSON.stringify(customer));

        return res.status(status).json(customer );
    }

    create(req, res) {
        const { name, site } = req.body;
        const id = customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;
      //  const id = customers[customers.length - 1].id + 1;
       // const id = customers.length + 1;
        const newCustomer = { id, name, site };
        customers.push(newCustomer);
        return res.status(201).json(newCustomer );
        }

    update(req, res) {
        const id = parseInt(req.params.id);
        const { name, site } = req.body;

        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;
        if (index >= 0) {
            customers[index] = { id: parseInt(id), name, site };
        }
            return res.status(status).json(customers[index]);

    }

    destroy(req, res) {
         const id = parseInt(req.params.id);
         const index = customers.findIndex(item => item.id === id);
         const status = index >= 0 ? 200 : 404;
         if (index >= 0) {
             customers.splice(index, 1);
         }
         return res.status(status).json();
    }
}

export default new CustomersController();
