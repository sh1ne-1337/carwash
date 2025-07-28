import { CustomerService } from "../services/customerService.js";

export const CustomerController = 
{
    getAll: async (req, res) => 
    {
        const customers = await CustomerService.getAll();
        res.json(customers);
    },

    getById: async (req, res) => 
    {
        const customer = await CustomerService.getById(req.params.id);
        if (!customer) return res.status(404).json({ message: "Not found" });
        res.json(customer);
    },

    create: async (req, res) => 
    {
        const customer = await CustomerService.create(req.body);
        res.status(201).json(customer);
    },

    update: async (req, res) => 
    {
        const updated = await CustomerService.update(req.params.id, req.body);
        if (!updated) return res.status(404).json({ message: "Not found" });
        res.json(updated);
    },

    delete: async (req, res) => 
    {
        const deleted = await CustomerService.delete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Not found" });
        res.json({ message: "Deleted", customer: deleted });
    }
};