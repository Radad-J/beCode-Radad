const Job = require('../models/Job');
const { errorHandler } = require('../middleware/errorHandler');

const createJob = async (req, res) => {
    const { title, website, contactName, contactEmail, contactPhone, address, origin, status, comments } = req.body;

    try {
        const job = await Job.create({
            user: req.user._id,
            title,
            website,
            contactName,
            contactEmail,
            contactPhone,
            address,
            origin,
            status,
            comments,
        });

        res.status(201).json(job);
    } catch (err) {
        const errors = errorHandler(err);
        res.status(400).json({ errors });
    }
};

const getJobs = async (req, res) => {
    const jobs = await Job.find({ user: req.user._id });
    res.json(jobs);
};

const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (job && job.user.equals(req.user._id)) {
            res.json(job);
        } else {
            res.status(404).json({ errors: [{ path: 'general', message: 'Job not found' }] });
        }
    } catch (err) {
        const errors = errorHandler(err);
        res.status(400).json({ errors });
    }
};

const updateJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (job && job.user.equals(req.user._id)) {
            job.title = req.body.title || job.title;
            job.website = req.body.website || job.website;
            job.contactName = req.body.contactName || job.contactName;
            job.contactEmail = req.body.contactEmail || job.contactEmail;
            job.contactPhone = req.body.contactPhone || job.contactPhone;
            job.address = req.body.address || job.address;
            job.origin = req.body.origin || job.origin;
            job.status = req.body.status || job.status;
            job.comments = req.body.comments || job.comments;

            const updatedJob = await job.save();
            res.json(updatedJob);
        } else {
            res.status(404).json({ errors: [{ path: 'general', message: 'Job not found' }] });
        }
    } catch (err) {
        const errors = errorHandler(err);
        res.status(400).json({ errors });
    }
};

module.exports = { createJob, getJobs, getJobById, updateJob };
