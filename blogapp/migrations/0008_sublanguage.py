# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0007_language'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubLanguage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('parent_language', models.ForeignKey(to='blogapp.Language')),
            ],
        ),
    ]
