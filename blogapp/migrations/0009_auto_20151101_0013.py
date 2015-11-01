# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0008_sublanguage'),
    ]

    operations = [
        migrations.CreateModel(
            name='LanguageModule',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.RenameModel(
            old_name='SubLanguage',
            new_name='LanguageCategory',
        ),
        migrations.RemoveField(
            model_name='language',
            name='libraries',
        ),
        migrations.AddField(
            model_name='languagemodule',
            name='parent_language_category',
            field=models.ForeignKey(to='blogapp.LanguageCategory'),
        ),
    ]
