import { Customer } from "../models/customers.js";

export const CustomerService = 
{
    async getAll() 
    {
        console.log("pidARAS");
        return await Customer.findAll();
    },

    async getById(id) 
    {
        return await Customer.findByPk(id);
    },

    async create(data) 
    {
        return await Customer.create(data);
    },

    async update(id, data) 
    {
        const customer = await Customer.findByPk(id);
        if (!customer) return null;
        return await customer.update(data);
    },

    async delete(id) 
    {
        const customer = await Customer.findByPk(id);
        if (!customer) return null;
        await customer.destroy();
        return customer;
  }
};