import React, {useState} from "react";

//import icons

import {IoMdClose} from 'react-icons/io';
import {CgMenuRight} from 'react-icons/cg';

//import link
import Link from 'react-router-dom';

//import motion
import {motion} from 'framer-motion'

//menu variants
const menuVariants = {
    hidden: {
        x: '100%'
    },
    show: {
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.9],
        },
    },
};

