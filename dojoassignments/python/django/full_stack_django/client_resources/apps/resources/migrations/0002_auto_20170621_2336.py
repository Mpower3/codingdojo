# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-06-21 23:36
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='project_notes',
            new_name='notes',
        ),
    ]
