from django.contrib import admin
from nested_inline.admin import NestedStackedInline, NestedModelAdmin
from example.models import *


from .models import Language, Post, LanguageCategory, LanguageModule


class LanguageModuleInline(NestedStackedInline):
    model = LanguageModule
    extra = 1
    fk_name = 'parent_language_category'


class LanguageCategoryInline(NestedStackedInline):
    model = LanguageCategory
    extra = 1
    fk_name = 'parent_language'
    inlines = [LanguageModuleInline,]


class LanguageAdmin(NestedModelAdmin):
    inlines = [LanguageCategoryInline,]


admin.site.register(Post)
admin.site.register(Language, LanguageAdmin)

