#!/bin/bash
systemctl stop dltw_site
npx prisma db push
npm build
systemctl start dltw_site
