import { CustomerService } from "../services/customerService.js";
import { STATUS_CODES } from "../common/statusCode.js";

export const CustomerController = {
  getAll: async (req, res) => {
    try {
      const customers = await CustomerService.getAll();
      res.status(STATUS_CODES.OK).json(customers);
    } catch (error) {
      console.error(error);
      res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: "Server error" });
    }
  },

  getById: async (req, res) => {
    try {
      const customer = await CustomerService.getById(req.params.id);
      if (!customer)
        return res
          .status(STATUS_CODES.NOT_FOUND)
          .json({ message: "Not found" });
      res.status(STATUS_CODES.OK).json(customer);
    } catch (error) {
      console.error(error);
      res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: "Server error" });
    }
  },

  create: async (req, res) => {
    try {
      const customer = await CustomerService.create(req.body);
      res.status(STATUS_CODES.CREATED).json(customer);
    } catch (error) {
      console.error(error);
      res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: "Server error" });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await CustomerService.update(req.params.id, req.body);
      if (!updated)
        return res
          .status(STATUS_CODES.NOT_FOUND)
          .json({ message: "Not found" });
      res.status(STATUS_CODES.OK).json(updated);
    } catch (error) {
      console.error(error);
      res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: "Server error" });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await CustomerService.delete(req.params.id);
      if (!deleted)
        return res
          .status(STATUS_CODES.NOT_FOUND)
          .json({ message: "Not found" });
      res
        .status(STATUS_CODES.OK)
        .json({ message: "Deleted", customer: deleted });
    } catch (error) {
      console.error(error);
      res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: "Server error" });
    }
  },
};
